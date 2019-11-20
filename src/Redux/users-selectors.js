

export const getUsers = (state) => {
    return state.dataUsers.arrayUsers;
}

export const getSize = (state) => {
    return state.dataUsers.pageSize;
}

export const getTotalCount = (state) => {
    return state.dataUsers.totalCount;
}

export const getcurrentPage = (state) => {
    return state.dataUsers.currentPage;
}

export const getFetching = (state) => {
    return state.dataUsers.isFetching;
}

export const getTogleIsFollowingProgress = (state) => {
    return state.dataUsers.togleIsFollowingProgress;
}
