<template>
  <div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div
      class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      aria-hidden="true">
      <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <p class="text-base/7 font-semibold text-indigo-600">Deploy faster</p>
        <h1 class="mt-2 text-pretty text-4xl font-semibold text-gray-900 sm:text-5xl">Selection Process
        </h1>
        <p class="mt-6 text-xl/8 text-gray-700">
          The GOSIM Rust Spotlight seeks to highlight innovative and impactful open-source projects that are up and
          coming within the rust ecosystem. Designing as fair and transparent of a process for that selection is our top
          priority. The first iteration of our selection process is designed as follows:
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
        <!-- <div class="relative lg:order-last lg:col-span-5"> -->
        <!--  <svg
            class="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            aria-hidden="true">
            <defs>
              <pattern id="e87443c8-56e4-4c20-9111-55b82fa704e3" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0.5 0V200M200 0.5L0 0.499983" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
          </svg>
          <figure class="border-l border-indigo-600 pl-8">
            <blockquote class="text-xl/8 font-semibold text-gray-900">
              <p>“Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                tristique.”</p>
            </blockquote>
            <figcaption class="mt-8 flex gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" class="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50" />
              <div class="text-sm/6">
                <div class="font-semibold text-gray-900">Brenna Goyette</div>
                <div class="text-gray-600">@brenna</div>
              </div>
            </figcaption>
          </figure>
        </div> -->
        <div class="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
          <h2 class="mt-2 text-2xl font-bold text-gray-900">Evaluation Criteria</h2>
          <p class="mt-6 text-lg">
            Our panel of industry experts carefully reviews each nomination, assessing projects based on three key
            criteria: innovation, utility, and community impact.
          </p>
          <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900">Innovation:</strong>
                We look for projects that introduce fresh ideas, unique solutions, or creative advancements in their
                respective fields. Whether through groundbreaking technology, novel design approaches, or transformative
                user experiences, we prioritize initiatives that push boundaries and inspire progress.</span>
            </li>
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900">Utility:</strong>
                A project’s practicality and effectiveness are crucial factors in our evaluation. We analyze how well
                it addresses real-world challenges, enhances efficiency, or provides tangible benefits to its users. The
                more impactful and functional a project is, the higher it ranks in our selection process.</span>
            </li>
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900">Community Impact:</strong>
                Beyond technical excellence, we value projects that foster positive change within their
                communities. Whether through social good, environmental sustainability, education, or accessibility, we
                recognize initiatives that make a meaningful difference in people’s lives.
              </span>
            </li>
            <p>Each nomination undergoes a rigorous assessment, ensuring that only the most deserving projects are
              highlighted. Our goal is to celebrate and amplify initiatives that not only demonstrate excellence but also
              contribute to a better future.</p>
          </ul>
        </div>

        <div class="relative lg:order-last lg:col-span-5">
          <h2 class="mt-2 text-2xl font-bold text-gray-900">Two Phase Review</h2>
          <p class="mt-6 text-lg">
            An initial asynchronous review round where judges will rate proposals and provide feedback</p>
          <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900"></strong>
                The top 20 or so rated projects will be selected for the secondary synchronous review pass</span>
            </li>
          </ul>
          <p class="mt-6 text-lg">
            A secondary review round where the judges will collectively discuss the merits of each project</p>
          <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900"></strong>During this round proposals
                will be eliminated by consent</span>
            </li>
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900"></strong>Judges will go around taking
                turns sharing proposals for removal with supportive reasoning, and if
                there are no objections that proposal will be removed from consideration</span>
            </li>
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900"></strong>This process will repeat until
                there are only 10 + 2 (10 primary and 2 backup) proposals are selected</span>
            </li>
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900"></strong>Judges will only resort to majority voting
                to remove proposals from consideration if they cannot reach unanimous consent within a reasonable time
                frame.</span>
            </li>
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900"></strong>Judges will each have one wildcard proposal
                that they can bring in for consideration from the first round regardless of its rating.</span>
            </li>
            <li class="flex gap-x-3">
              <ScaleIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span><strong class="font-semibold text-gray-900"></strong>These wildcard proposals will not receive
                special consideration in the second round of the selection process, but it will give judges an
                opportunity to advocate for projects that they feel the other judges under-appreciated.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ScaleIcon } from '@heroicons/vue/20/solid'
</script>
