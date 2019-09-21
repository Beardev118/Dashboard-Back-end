interface IPaginate {
    page: number;
    pageSize: number;
}
declare const paginate: ({ page, pageSize }: IPaginate) => {
    offset: number;
    limit: number;
};
export default paginate;
