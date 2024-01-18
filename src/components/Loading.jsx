const Loading = () => {
  return (
    // burada ekranın tam ortasında olan bir spinner yapar mısın
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700" />
    </div>


  )
}

export default Loading
