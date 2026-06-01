import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, MessageSquare, Trash2, ArrowUpRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage, Language } from "../types";
import { CHAT_SUGGESTIONS } from "../data";

interface AiAssistantProps {
  language: Language;
}

export default function AiAssistant({ language }: AiAssistantProps) {
  // Static state initialiser
  const getWelcomeMessage = (lang: Language): ChatMessage => ({
    id: "welcome-msg",
    role: "assistant",
    content: lang === "fr"
      ? "Je suis l'assistant d'Aurore, comment est-ce que je peux t'aider ?"
      : "I am Aurore's assistant, how can I help you?",
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });

  const [messages, setMessages] = useState<ChatMessage[]>([getWelcomeMessage(language)]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync welcome message if the user switches languages BEFORE starting the conversation
  useEffect(() => {
    if (!conversationStarted && messages.length === 1 && messages[0].id === "welcome-msg") {
      setMessages([getWelcomeMessage(language)]);
    }
  }, [language, conversationStarted]);

  // Scroll to bottom when messages list grows
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    setConversationStarted(true);
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Package payload for backend chat endpoint
      const payloadMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with AI endpoint.");
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.text || "I was unable to retrieve a response. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: language === "fr"
          ? "Oups ! Je rencontre une petite difficulté technique pour me connecter à mon serveur d'intelligence. Peux-tu réessayer dans un instant ?"
          : "Oops! I am having some technical connection difficulties. Could you please try again in a moment?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([getWelcomeMessage(language)]);
    setConversationStarted(false);
    setInput("");
  };

  const suggestions = CHAT_SUGGESTIONS[language];

  return (
    <div className="flex flex-col h-full bg-[#fafafd] border border-neutral-200/80 rounded-2xl shadow-inner-lg overflow-hidden">
      {/* Drawer Header */}
      <div className="bg-gradient-to-r from-[#17171a] to-[#2c2c35] text-white p-4 flex items-center justify-between border-b border-neutral-700 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#dfba6b] to-[#c5a059] flex items-center justify-center shadow-inner">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-serif font-medium text-base tracking-wide text-[#fdfbf7]">BE My Aurora</h3>
            <p className="text-[11px] text-neutral-300 font-sans font-light tracking-wider">
              {language === "fr" ? "Agent IA interactif d'Aurore" : "Aurore's Live AI Assistant"}
            </p>
          </div>
        </div>
        
        {messages.length > 1 && (
          <button 
            type="button"
            onClick={handleReset}
            className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-rose-450 transition"
            title={language === "fr" ? "Effacer la discussion" : "Clear conversation"}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Messages Flow Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 class-scroller select-text">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#17171a] text-[#fbfafa] rounded-tr-xs shadow-md"
                    : "bg-white text-neutral-800 border border-neutral-200/80 rounded-tl-xs shadow-sm"
                }`}
              >
                {/* Format paragraphs/newlines simple rendering */}
                <div className="whitespace-pre-line font-sans font-light tracking-wide text-[13.5px]">
                  {msg.content}
                </div>
                <div
                  className={`text-[9px] mt-1.5 block font-mono ${
                    msg.role === "user" ? "text-neutral-400 text-right" : "text-neutral-500 text-left"
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <div className="flex items-center gap-2 text-neutral-500 text-xs">
            <div className="bg-white border border-neutral-100/90 rounded-2xl px-4 py-3 shadow-xs rounded-tl-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#dfba6b] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-[#a3802e] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <span className="font-mono text-[10px] italic animate-pulse">
              {language === "fr" ? "Aurora formule sa réponse..." : "Thinking..."}
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested chips container */}
      {messages.length === 1 && (
        <div className="px-4 py-2 border-t border-neutral-100/80 bg-stone-50/60">
          <p className="text-[11px] text-neutral-500 font-serif flex items-center gap-1 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#dfba6b]" />
            {language === "fr" ? "Suggestions de questions :" : "Suggested topics:"}
          </p>
          <div className="flex flex-col gap-1.5">
            {suggestions.map((s) => (
              <button
                key={s.text}
                type="button"
                onClick={() => handleSend(s.text)}
                className="group flex items-center justify-between text-left text-xs bg-white hover:bg-[#faf4ea] hover:border-[#dfba6b] transition px-3 py-2 rounded-xl border border-neutral-200 text-neutral-700 shadow-3xs"
              >
                <span className="font-sans line-clamp-1">{s.text}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#dfba6b] flex-shrink-0 ml-1" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input controls footer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="p-3 border-t border-neutral-200 bg-white"
      >
        <div className="flex gap-2 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            placeholder={
              language === "fr" 
                ? "Discutez de son profil, skincare, l'Oréal..." 
                : "Ask about skincare, research, Byredo..."
            }
            className="flex-1 text-sm bg-neutral-100 hover:bg-neutral-50 focus:bg-white text-neutral-800 rounded-xl px-4 py-2.5 outline-none border border-transparent focus:border-neutral-300 transition pr-10 shadow-inner font-sans"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="bg-[#17171a] hover:bg-[#dfba6b] hover:text-stone-900 disabled:bg-neutral-200 text-white disabled:text-neutral-400 rounded-xl p-2.5 flex items-center justify-center transition shadow-md disabled:shadow-none"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
