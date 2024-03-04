
export function createData(
    id: number,
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    writtenBy: string,
    protein: number,
) {
    return { id, name, calories, fat, carbs,writtenBy,  protein };
}

export const tableHeading: { title: string, align: "center" | "right" | "left" }[] = [
    {
        title: "id",
        align: "left",
    },
    {
        title: "title",
        align: "center",
    },
    {
        title: "Description",
        align: "center",
    },
    {
        title: "Category",
        align: "center",
    },
    {
        title: "Date",
        align: "center",
    },
    {
        title: "Written by",
        align: "center",
    },
    {
        title: "Action",
        align: "right",
    },
];

export const rows = [
    createData(1, 'Frozen yoghurt', 159, 6.0, 24,'Frozen yoghurt', 4.0),
    createData(2, 'Ice cream sandwich', 237, 9.0, 37,'Frozen yoghurt', 4.3),
    createData(3, 'Eclair', 262, 16.0, 24,'Frozen yoghurt', 6.0),
    createData(4, 'Cupcake', 305, 3.7, 67,'Frozen yoghurt', 4.3),
    createData(5, 'Gingerbread', 356, 16.0, 49,'Frozen yoghurt', 3.9),
    
];