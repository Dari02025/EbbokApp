import httpService from "api/http.axios";
import { EbookPrincipal } from "interfaces/global.interface";

export async function fetchEbooks() {
  const { data } = await httpService.get<EbookPrincipal>("");
  return data;
}
