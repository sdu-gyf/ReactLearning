import useSound from 'use-sound'

export default function useKeySound() {
    const [playWordSound] = useSound("/dictvoice?audio=word&type=1")
    return [playWordSound]
}