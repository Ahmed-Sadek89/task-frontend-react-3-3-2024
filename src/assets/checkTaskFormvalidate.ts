type taskType = {
    title: string;
    description: string;
    category: string;
}
type action = (value: React.SetStateAction<boolean>) => void
type actionStateType = {
    setIsTitle: action,
    setIsDescripton: action,
    setIsCategory: action
}
export function checkTaskFormvalidate(
    task: taskType,
    {
        setIsTitle,
        setIsDescripton,
        setIsCategory
    }: actionStateType
) {
    if (task.title === '') {
        setIsTitle(false)
    } else {
        setIsTitle(true)
    }
    if (task.description === '') {
        setIsDescripton(false)
    } else {
        setIsDescripton(true)
    }
    if (task.category === '') {
        setIsCategory(false)
    } else {
        setIsCategory(true)
    }
}