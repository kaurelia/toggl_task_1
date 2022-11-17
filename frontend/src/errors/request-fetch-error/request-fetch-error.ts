import ResponseError from "../../types/respons-error/response-error";

class RequestFetchError extends Error {
  public json: ResponseError;
  constructor(json: ResponseError) {
    super(json.error);
    this.json = json;
    this.name = "RequestFetchError";
  }
}

export default RequestFetchError;
