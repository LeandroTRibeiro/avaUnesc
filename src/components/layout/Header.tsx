import logo from "@/assets/image/logo.png";
import { Bell, MessageCircle } from "lucide-react"
import { ModeToggle } from "../features/ModeToggle";
import { UserMenu } from "./UserMenu";

export const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 z-50 w-full h-14 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h1 className="text-2xl font-light">AVA<span className="font-extrabold">UNESC</span></h1>
            <nav className="flex items-center gap-5">
                <Bell className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
                <MessageCircle className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
                <ModeToggle />
                <UserMenu />
            </nav>
        </header>
    );
};