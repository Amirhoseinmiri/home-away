"use client";

import { useProperty } from "@/utils/store";
import { Booking } from "@/utils/types";
import BookingContainer from "./BookingContainer";
import BookingCalendar from "./BookingCalendar";
import { useEffect } from "react";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};
const BookingWrapper = ({
  bookings,
  price,
  propertyId,
}: BookingWrapperProps) => {
  useEffect(() => {
    useProperty.setState({
      price,
      bookings,
      propertyId,
    });
  }, [bookings, price, propertyId]);
  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  );
};

export default BookingWrapper;
