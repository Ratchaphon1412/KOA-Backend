import createError from "http-errors";

function abort(...args) {
  throw createError(...args);
}

export default abort;
