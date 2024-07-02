import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { House, UserCog, Grid3x3, MessageCircle, Wrench, LogOut } from "lucide-react";


export const UserMenu = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
            <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>LT</AvatarFallback>
            </Avatar>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            personalize suas configurações de sistema, ajuste preferências pessoais.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5 p-10 pl-0"> 
            <a href="/" className="flex items-center gap-2 hover:scale-110 hover:ml-5 transition-all duration-300 ease-in-out">
                <House /> Página Inicial
            </a>
            <a href="/" className="flex items-center gap-2 hover:scale-110 hover:ml-5 transition-all duration-300 ease-in-out">
                <UserCog /> Perfil
            </a>
            <a href="/" className="flex items-center gap-2 hover:scale-110 hover:ml-5 transition-all duration-300 ease-in-out">
                <Grid3x3 /> Notas
            </a>
            <a href="/" className="flex items-center gap-2 hover:scale-110 hover:ml-5 transition-all duration-300 ease-in-out">
                <MessageCircle /> Mensagens
            </a>
            <a href="/" className="flex items-center gap-2 hover:scale-110 hover:ml-5 transition-all duration-300 ease-in-out">
                <Wrench /> Configurações do Sistema
            </a>
            <a href="/" className="flex items-center gap-2 hover:scale-110 hover:ml-5 transition-all duration-300 ease-in-out">
                <LogOut /> Sair
            </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
