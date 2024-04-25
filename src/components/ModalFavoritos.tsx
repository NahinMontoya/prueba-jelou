import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';
import BookCard from './BookCard';

interface Props {
    isOpen: boolean,
    setIsOpen: () => void,
    books: any,
    handleFavorites?: (bookSelected: any) => void; 
}

export const ModalFavoritos = ({
    isOpen,
    setIsOpen,
    books,
    handleFavorites
}: Props) => {
  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child>
              <Dialog.Panel className="w-full max-w-3xl h-full overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-extrabold mb-6 text-center text-black border-b-2 border-gray-200 pb-2"
                >
                  Libros que estás leyendo
                </Dialog.Title>
                <div className="mt-2">
                  <div className="grid grid-cols-3 gap-3 overflow-x-auto">
                    {books.map((book: any) => (
                      <div key={book.book.title}>
                        <BookCard
                          book={book}
                          cover={book.book.cover}
                          handleFavorites={handleFavorites}
                          isFavorite={books.some((bookSelected: any) => 
                            bookSelected.book.title.toLowerCase() === book.book.title.toLowerCase()
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center h-full mt-4">
                  <button
                    type="button"
                    className='mx-auto px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400'
                    onClick={setIsOpen}
                  >
                    Salir
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalFavoritos;
