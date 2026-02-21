"use client";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton() {
    const [visible, setVisible] = useState(false);

    const showAlert = () => {
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, 2000);
    };
    const handleCopy = async () => {
        await navigator.clipboard.writeText("rentify");
        showAlert();
    };

    return (
        <>
            <button
                onClick={handleCopy}
                className="text-primary-shade-1 flex items-center gap-1 text-xl cursor-pointer"
                type="button"
            >
                <span>rentify</span>
                <Copy size={24} />
            </button>
            {/* Alert */}
            {visible && (
                <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all z-50">
                    متن کپی شد !
                </div>
            )}
        </>
    );
}
