export const safeJSONParse = (json) => {
  try {
    return json ? JSON.parse(json) : null;
  } catch (error) {
    console.error(`Error parsing JSON: ${error.message}`);
    return null;
  }
};
