/**
 * @desc    Standardized API Response structure
 */
class ApiResponse {
    constructor(success, data, message, pagination = null) {
        this.success = success;
        this.message = message;
        if (data) this.data = data;
        if (pagination) this.pagination = pagination;
    }

    static success(data, message = 'Success', pagination = null) {
        return new ApiResponse(true, data, message, pagination);
    }

    static error(message = 'Error', data = null) {
        return new ApiResponse(false, data, message);
    }
}

module.exports = ApiResponse;
