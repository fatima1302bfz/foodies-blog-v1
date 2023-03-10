export const truncate = (str: string | undefined, n: number) => {
    if(typeof str === undefined){
        return;
    }else if (typeof str === 'string') {
        if(str?.length <= 0) return 'لا يوجد وصف حاليا لهذا الفيلم';
        return str?.length > n ? str?.substring(0, n - 1) + '...' : str;
    }else{
        return 'لا يوجد وصف حاليا لهذا الفيلم'
    }
}