const Booking = require("../model/Booking");

const BookingController = {
  createBooking: async function (req, res, next) {
    try {
      const { prefix, name, personalId, birthday, address, telephone } =
        req.body;
      const bookingCreate = await Booking.create({
        prefix,
        name,
        personalId,
        birthday,
        address,
        telephone,
      });
      res.status(200).json(bookingCreate);
    } catch (err) {
      console.log(err);
    }
  },
  getBookging: async function (req, res, next){
      try{
          const allBooking = await Booking.find({})
          res.status(200).json(allBooking)
      } catch (err){
          console.log(err)
      }
  }
};

module.exports = BookingController;
