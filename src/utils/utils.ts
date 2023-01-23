export const stringAvatar = (name: string) =>
{
    let word = name[0]
    return {
      sx: {
        color: '#000'
      },
      children: word
    }
}