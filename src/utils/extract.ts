import { Response } from "@/interfaces/Response";
export function extract(
  res: Response,
  prop: string
): Response {
  const { data, ...rest } = res;
  return { data: data[prop], ...rest };
}
