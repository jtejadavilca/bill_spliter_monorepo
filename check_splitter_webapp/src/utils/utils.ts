export const generateRandonCode = (): string => {
    // Generar un código aleatorio de 9 caracteres que solo contenga letras y números
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 9; i++) {
        if (i === 3 || i === 6) {
            result += "-";
        }
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
