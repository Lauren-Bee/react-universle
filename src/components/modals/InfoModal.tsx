import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-300">
        Guess the space-themed word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="H" />
        <Cell value="A" />
        <Cell value="O" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-300">
        The letter C is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="O" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="present"
        />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-300">
        The letter W is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="U" />
        <Cell value="R" />
        <Cell isRevealing={true} isCompleted={true} value="G" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-300">
        The letter G is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/Lauren-Bee/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
      <p className="mt-6 italic text-sm text-gray-300">
        Based on {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          react-wordle by cwackerfuss on GitHub
        </a>{' '}
      </p>
    </BaseModal>
  )
}
