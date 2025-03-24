export default function FeatureSec() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Track Easily</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to track your expenses
        </p>

        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
    
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center">Sort by tags and people</p>
                <p className="mt-2 text-sm text-gray-600 text-center">Easily track  who spent what amount of money</p>
              </div>
              <div className="relative min-h-[30rem] w-full grow flex items-center justify-center">
                <img
                  className="h-50 object-cover rounded-lg"
                  src="./tags.png"
                  alt="Mobile Friendly Feature"
                />
              </div>
            </div>
          </div>


          <div className="relative">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center">Check Using Charts</p>
                <p className="mt-2 text-sm text-gray-600 text-center">Track maximum spending using tags and charts</p>
              </div>
              <div className="flex flex-1 items-center justify-center p-8">
                <img
                  className="w-full max-w-xs"
                  src="./charts.png"
                  alt="Chart Feature"
                />
              </div>
            </div>
          </div>

  
          <div className="relative lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center">Different Dashboards</p>
                <p className="mt-2 text-sm text-gray-600 text-center">Create separate dashboards for each group</p>
              </div>
              <div className="flex flex-1 items-center justify-center p-8">
                <img
                  className="h-80 object-cover"
                  src="./diffdash.png"
                  alt="Multiple Dashboards"
                />
              </div>
            </div>
          </div>

   
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center">Groups</p>
                <p className="mt-2 text-sm text-gray-600 text-center">Easily connect with the group members</p>
              </div>
              <div className="relative min-h-[30rem] w-full grow flex items-center justify-center">
                <img
                  className="h-90 object-cover rounded-lg"
                  src="./groups.png"
                  alt="Groups Feature"
                />
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}
