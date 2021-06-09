import React from "react";

const Review = () => {
  return (
    <div class="flex flex-wrap  px-16">
      <div class=" p-6 md:w-1/2">
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
          <img
            class="w-32  md:w-48 md:h-auto  rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                “User friendly & easy to communicate. Excellent service for
                deliver books and fast with shipping. I recommend every one
                order books for this website”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-red-900">Monica Geller</div>
              <div class="text-gray-500">Senior programmer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </div>
      <div class=" p-6 md:w-1/2 ">
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
          <img
            class="w-32  md:w-48 md:h-auto  rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                “User friendly & easy to communicate. Excellent service for
                deliver books and fast with shipping. I recommend every one
                order books for this website”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-red-900">Joey Tribbiani</div>
              <div class="text-gray-500">Actor, New york</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Review;
