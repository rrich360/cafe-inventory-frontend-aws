 export class GlobalConstants {

    // Messages
    public static genericError: string = "Something went wrong. Please try again later.";
    public static badCredentialsError: string = "Bad credentials. Please try again.";
    public static unauthorized: string = "You are not authorized to access this resource.";
    public static productExistError: string = "Product already exists.";
    public static categoryExistError: string = "Category already exists.";

    // Regex
    // Includes accented Latin letters (À-ſ: é, è, ñ, ü, ö, etc.) and common
    // "smart" typography that copy/paste from Word, email, or other sources introduces
    // (curly quotes ‘’, en/em dash –—) - real names and vendor names
    // pasted by real demo visitors otherwise fail silently against an ASCII-only pattern.
    public static nameRegex: string = "[a-zA-Z0-9À-ſ .,&'@#/‘’–—-]*";
    public static usernameRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    public static mobileNumberRegex: string = "^[(]?[0-9]{3}[)]?[- ]?[0-9]{3}[- ]?[0-9]{4}$";
    public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    // Variables
    public static error: string = "error";
    public static success: string = "success";

    // Roles
    public static adminRole: string = "admin";
    public static userRole: string = "user";

 }
