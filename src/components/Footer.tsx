import {Github, LinkedinIcon, Send} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full p-5">
            <div className="flex items-center w-full justify-center gap-4">
                <a href="https://github.com/cmoztas/react-todo" target="_blank">
                    <Github size={20}/>
                </a>
                <a href="https://www.linkedin.com/in/cagkanmert/" target="_blank">
                    <LinkedinIcon size={20} className="text-blue-700" />
                </a>
                <a href="mailto:cmoztas@pm.me">
                    <Send size={20} className="text-red-700" />
                </a>
            </div>
        </footer>
    )
}