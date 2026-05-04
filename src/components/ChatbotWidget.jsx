import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { sendChatMessages } from "../services/ChatBotService";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState([
    {
      role: "assistant",
      content:
        "Halo, Saya Blue.ai, virtual assistant Kampus UPI Cibiru! Ada yang bisa saya bantu? ",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    const newMessages = [...message, userMsg];

    setMessage(newMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendChatMessages(newMessages);

      setMessage((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessage((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf terjadi kesalahan. Silakan coba lagi!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div
          className="mb-4 w-80 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
          style={{ height: "420px" }}
        >
          {/* Header */}
          <div className="bg-[#009AD7] px-4 py-3 flex justify-between items-center">
            <span className="text-white font-bold">Blue.ai</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-white w-5 h-5" />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {message.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-xl px-3 py-2 text-sm max-w-[75%] ${
                    m.role === "user"
                      ? "bg-[#009AD7] text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-xs">Mengetik...</div>
            )}
            <div ref={bottomRef} />
          </div>
          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#009AD7]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Tanya sesuatu..."
            />
            <button
              onClick={handleSend}
              className="bg-[#009AD7] text-white p-2 rounded-lg"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#009AD7] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
