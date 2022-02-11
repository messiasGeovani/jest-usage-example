import dayjs from "dayjs";

export default function (value: string | number): boolean {
  const date = dayjs(value);

  return date.isValid();
}
