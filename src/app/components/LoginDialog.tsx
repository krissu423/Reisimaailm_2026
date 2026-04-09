import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";
import { X } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({
  open,
  onOpenChange,
}: LoginDialogProps) {
  const [mode, setMode] = useState<"login" | "register">(
    "login",
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onOpenChange]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setMode("login");
  };

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "register") {
      if (!name || !email || !password || !confirmPassword) {
        toast.error("Palun täida kõik väljad");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Salasõnad ei kattu");
        return;
      }

      if (password.length < 6) {
        toast.error("Salasõna peab olema vähemalt 6 tähemärki");
        return;
      }

      setIsLoading(true);
      try {
        await register(name, email, password);
        toast.success(
          "Registreerimine õnnestus! Oled nüüd sisse logitud.",
        );
        onOpenChange(false);
        resetForm();
      } catch (error) {
        toast.error("Registreerimine ebaõnnestus");
      } finally {
        setIsLoading(false);
      }
    } else {
      if (!email || !password) {
        toast.error("Palun täida kõik väljad");
        return;
      }

      setIsLoading(true);
      try {
        await login(email, password);
        toast.success("Sisselogimine õnnestus!");
        onOpenChange(false);
        resetForm();
      } catch (error) {
        toast.error("Sisselogimine ebaõnnestus");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
      />

      <div className="absolute left-1/2 top-1/2 z-[10000] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-2xl text-foreground">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={handleClose}
          disabled={isLoading}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="mb-4 pr-10">
          <h2 className="text-2xl font-semibold">
            {mode === "login" ? "Logi sisse" : "Loo konto"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {mode === "login"
              ? "Sisesta oma e-posti aadress ja salasõna"
              : "Loo uus konto, et broneerida reise"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Nimi</Label>
              <Input
                id="name"
                type="text"
                placeholder="Sinu nimi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">E-post</Label>
            <Input
              id="email"
              type="email"
              placeholder="nimi@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Salasõna</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                Kinnita salasõna
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                disabled={isLoading}
              />
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={handleClose}
              disabled={isLoading}
            >
              Tühista
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading
                ? mode === "login"
                  ? "Logib sisse..."
                  : "Registreerib..."
                : mode === "login"
                  ? "Logi sisse"
                  : "Registreeru"}
            </Button>
          </div>

          <div className="text-center text-sm">
            <button
              type="button"
              onClick={switchMode}
              disabled={isLoading}
              className="text-primary hover:underline"
            >
              {mode === "login"
                ? "Pole kontot? Registreeru siin"
                : "Juba on konto? Logi sisse"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}