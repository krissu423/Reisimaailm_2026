import { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { et } from 'date-fns/locale';
import { DateRange } from 'react-day-picker';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Input } from './ui/input';
import { Calendar } from './ui/calendar';
import { Button } from './ui/button';

interface DateRangePickerProps {
  value: string;
  onChange: (value: string) => void;
}

export function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleDateSelect = (range: DateRange | undefined) => {
    setDateRange(range);
    
    if (range?.from && range?.to) {
      const formattedRange = `${format(range.from, 'dd.MM.yyyy', { locale: et })} - ${format(range.to, 'dd.MM.yyyy', { locale: et })}`;
      onChange(formattedRange);
    } else if (range?.from) {
      const formattedDate = format(range.from, 'dd.MM.yyyy', { locale: et });
      onChange(formattedDate);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
          <Input
            placeholder="Kuupäevad"
            value={value}
            readOnly
            className="pl-10 cursor-pointer"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={handleDateSelect}
          numberOfMonths={2}
          disabled={{ before: new Date() }}
        />
        <div className="p-3 border-t">
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
