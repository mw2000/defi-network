import React from 'react'
import Image from 'next/image'

const ImageGrid = () => {


    const gridImages = [
        { image: '/gridImage1.png' },
        { image: '/gridImage2.png' },
        { image: '/gridImage3.png' },
        { image: '/gridImage1.png' },
        { image: '/gridImage2.png' },
        { image: '/gridImage3.png' },
        { image: '/gridImage1.png' },
        { image: '/gridImage2.png' },
        { image: '/gridImage3.png' },
        { image: '/gridImage1.png' },
        { image: '/gridImage2.png' }

    ]

    const returnMargin = (index: number) => {
        if (index === 1 || index === 3 || index === 6 || index === 9 || index === 11) {
            return 'mt-12'
        }
        if (index === 4 || index === 7 || index === 10) {
            return '-mt-12'
        }
    }

    return (
        <div className="grid grid-cols-11 gap-4 mt-44">
            {
                gridImages.map(
                    (grid: GridImage, index: number) => {
                        return <div className={"h-96 w-full relative "
                            + (returnMargin(index + 1))
                        } key={index}>
                            <Image
                                src={grid.image}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                    }
                )

            }

        </div>

    )
}

export interface GridImage {
    image: string
}

export default ImageGrid
