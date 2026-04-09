import { useState } from 'react';
import { Users, Minus, Plus } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface GuestCounts {
  adults: number;
  children2to17: number;
  children0to1: number;
}

interface GuestSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function GuestSelector({ value, onChange }: GuestSelectorProps) {
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState<GuestCounts>({
    adults: 1,
    children2to17: 0,
    children0to1: 0,
  });

  const updateGuests = (type: keyof GuestCounts, increment: boolean) => {
    setGuests((prev) => {
      const newValue = increment ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      const updated = { ...prev, [type]: newValue };
      
      // Update the input value
      const total = updated.adults + updated.children2to17 + updated.children0to1;
      onChange(`${total} külalist`);
      
      return updated;
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
          <Input
            placeholder="Külalised"
            value={value}
            readOnly
            className="pl-10 cursor-pointer"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <span className="text-sm">Täiskasvanu</span>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateGuests('adults', false)}
                disabled={guests.adults === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{guests.adults}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateGuests('adults', true)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Children 2-17 */}
          <div className="flex items-center justify-between">
            <span className="text-sm">Laps (2-17 a.)</span>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateGuests('children2to17', false)}
                disabled={guests.children2to17 === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{guests.children2to17}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateGuests('children2to17', true)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Children 0-1 */}
          <div className="flex items-center justify-between">
            <span className="text-sm">Laps (0-1 a.)</span>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateGuests('children0to1', false)}
                disabled={guests.children0to1 === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{guests.children0to1}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateGuests('children0to1', true)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Done Button */}
          <Button
            className="w-full bg-accent hover:bg-accent/90 text-text"
            onClick={() => setOpen(false)}
          >
            Valmis
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}