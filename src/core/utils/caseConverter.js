// Arquivo criado pelo clide por 0.01 USD
// Necessario validação

/**
 * Converte uma string de snake_case para camelCase.
 * Ex.: "created_at" -> "createdAt"
 *
 * @param {string} string
 * @returns {string}
 */
export function convertToCamel(string) {
    return string.replace(/_+([a-z0-9])/g, (_, char) => char.toUpperCase());
}

/**
 * Converte as chaves de um objeto (ou de cada objeto dentro de um array)
 * de snake_case para camelCase, preservando os valores.
 *
 * Valores que não são objetos simples (number, string, boolean, null, Date, etc.)
 * são retornados sem alteração, o que torna a função segura para ser usada
 * diretamente no `postProcessResponse` do Knex (insert retorna [id], update
 * retorna a contagem de linhas, select retorna objeto ou array de objetos).
 *
 * @param {unknown} data
 * @returns {unknown}
 */
export function convertKeysToCamel(data) {
    if (Array.isArray(data)) {
        return data.map((item) => convertKeysToCamel(item));
    }

    if (data !== null && typeof data === "object" && !(data instanceof Date)) {
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => [convertToCamel(key), value])
        );
    }

    return data;
}