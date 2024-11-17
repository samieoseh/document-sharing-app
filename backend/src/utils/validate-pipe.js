exports.validateRequestBody = (requiredFieldsWithTypes) => {
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is required" });
    }

    console.log("req.body", req.body);
    // Check for missing fields and type validation
    const missingFields = [];
    const invalidFields = [];

    requiredFieldsWithTypes.forEach(({ field, types }) => {
      // Check if field is missing
      if (!req.body[field]) {
        missingFields.push(field);
      } else {
        // Check if the type is valid (either string or number)
        const value = req.body[field];
        if (!types.includes(typeof value)) {
          invalidFields.push(`${field} must be one of ${types.join(" or ")}`);
        }
      }
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    if (invalidFields.length > 0) {
      return res.status(400).json({
        message: invalidFields.join(", "),
      });
    }

    next(); // Proceed to the route handler if validation passed
  };
};
