const BookingView = () => (
    <div className="space-y-4 bg-[#EDE8FA] px-6 py-6 rounded-3xl max-w-[62.5rem] mx-auto min-h-screen">
    <div className="w-full bg-[#e9deff] rounded-full h-[4px] mb-4">
      <div
        className="bg-[#6949ff] h-[4px] rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>

    
    {bookingStep === 1 && (
      <div className="space-y-4">
        <select
          className="w-full bg-[#e9deff] text-[#6949ff] p-2 rounded-md"
          value={bookingInfo.subject || ""}
          onChange={(e) => handleBookingInputChange("subject", e.target.value)}
        >
          <option value="">Select Subject</option>
          {selectedTutor?.subjects?.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>

        <select
          className="w-full bg-[#e9deff] text-[#6949ff] p-2 rounded-md"
          value={bookingInfo.level || ""}
          onChange={(e) => handleBookingInputChange("level", e.target.value)}
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <button
          onClick={handleNextBookingStep}
          className="w-full bg-[#6949ff] text-white p-2 rounded-md"
        >
          Next
        </button>
      </div>
    )}

    {bookingStep === 2 && (
      <div className="space-y-4">
        <input
          type="date"
          className="w-full bg-[#e9deff] text-[#6949ff] p-2 rounded-md"
          value={bookingInfo.date || ""}
          onChange={(e) => handleBookingInputChange("date", e.target.value)}
        />
        <input
          type="time"
          className="w-full bg-[#e9deff] text-[#6949ff] p-2 rounded-md"
          value={bookingInfo.time || ""}
          onChange={(e) => handleBookingInputChange("time", e.target.value)}
        />
        <button
          onClick={handleNextBookingStep}
          className="w-full bg-[#6949ff] text-white p-2 rounded-md"
        >
          Next
        </button>
      </div>
    )}

    {bookingStep === 3 && (
      <div className="space-y-4">
        <h3 className="text-[#6949ff] font-bold">Confirm Booking</h3>
        <p>Subject: {bookingInfo.subject}</p>
        <p>Level: {bookingInfo.level}</p>
        <p>Date: {bookingInfo.date}</p>
        <p>Time: {bookingInfo.time}</p>
        <button
          onClick={handleConfirmBooking}
          className="w-full bg-[#6949ff] text-white p-2 rounded-md"
        >
          Confirm
        </button>
      </div>
    )}
  </div>
  );