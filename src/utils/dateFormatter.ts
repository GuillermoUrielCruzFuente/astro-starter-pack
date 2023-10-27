/**
 * Format a given `YYYY-MM-DD` date format in `en` format
 * @param date YYYY-MM-DD format
 */
export const dateFormatter = (date: string) => {
	const dateInstance = new Date(date);

	const formattedDate = new Intl.DateTimeFormat("en", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(dateInstance);

	return formattedDate;
};
