var ch= prompt("Enter the character");
switch(ch){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
       document.write(ch + "  is a vowel");
        break;
    default:
        document.write( ch + "  is not a vowel");
}