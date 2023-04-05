export const dateFormate = (dateString: string): string | null => {
  try {
    // date objects options
    const dateOptions: Intl.DateTimeFormatOptions = {
      // timeZone: "UTC",
      month: "short",
      day: "numeric",
      year: "numeric",
    };

    const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);
    const dateAsFormattedString = dateFormatter.format(new Date(dateString));
    return dateAsFormattedString;
  } catch (error) {
    console.log("error :", error);
    return null;
  }
};
