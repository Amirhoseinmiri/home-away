/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  defaultSelected,
  generateBlockedPeriods,
  generateDateRange,
  generateDisabledDates,
} from "@/utils/calendar";
import React, { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";
import { useProperty } from "@/utils/store";
import { useToast } from "@/hooks/use-toast";

const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);
  const { toast } = useToast();
  const blockPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });
  const unavailableDates = generateDisabledDates(blockPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDate = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: "Some dates are booked. please Select again.",
        });
        return true;
      }
      return false;
    });

    useProperty.setState({ range });
  }, [range]);
  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      disabled={blockPeriods}
      onSelect={setRange}
      className="mb-4"
    />
  );
};
export default BookingCalendar;
