export function saveNewToken(state,newtoken) {
    state.token=newtoken;
}

export function deleteToken(state){
    state.token=undefined;
}
