
export async function getNewTokens (refreshToken) {
    const result = await requestAsync("get", "api/auth/refresh-token/" + refreshToken);
    if (result.data.code === 0) rewriteTokens(result.data.data);
}

export async function getNewToken(refreshToken) {
    const result = await requestAsync("get", "api/auth/refresh-token/" + refreshToken);
    if (result.data.code === 0) return result.data.data;
}

export async function refreshTokens(refreshToken) {
    const newTokens = await getNewToken(refreshToken);
    rewriteTokens(newTokens);
}

export const updateTokensAsync = async (headers) => {
    const refreshToken = getRefreshToken();
    const response = await axios({
        method: "get", 
        url: refreshTokenUrl + refreshToken,
        headers: headers,
    });
    rewriteTokens(response.data.data);
}


export async function getUserId() {
    const result = await getUserIdAsync();
    return result;
}