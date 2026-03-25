// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";

import "@splidejs/react-splide/css";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const SlideShow = ({ images }: { images: string[] }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="relative w-full my-6 rounded-lg overflow-hidden border-[.5px] border-zinc-700 bg-zinc-950/30">
      <Splide
        options={{
          autoplay: "true",
          type: "loop",
          perPage: 1,
          start: 0,
          gap: "1rem",
          arrows: true,
          pagination: true,
        }}
      >
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center justify-center p-2">
            <Dialog>
              <DialogTrigger
                className="relative w-full h-full flex justify-center"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <Image
                  src={image}
                  alt="screenshot"
                  width={1000}
                  height={1000}
                  className="w-full rounded-lg h-auto object-cover max-h-[500px]"
                />
                <AnimatePresence>
                  {hovering && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px] rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Click to zoom
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogTrigger>
              <DialogContent className="min-w-[90vw] h-[90vh] bg-transparent outline-none border-none p-0 m-0">
                <DialogHeader className="w-full">
                  <DialogDescription className="text-center text-white bg-black/50 p-2 rounded-t-lg">
                    {image.split("/").pop()}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex h-full w-full justify-center items-center pb-10">
                  <img
                    src={image}
                    alt="screenshot zoom"
                    className="max-w-[100vw] max-h-[90vh] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
export default SlideShow;
