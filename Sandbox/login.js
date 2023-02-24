// else {
//   req.logIn(user, (err) => {
//     if (err) throw err;
//     res.send("Successfully Authenticated");
//     console.log(req.user);
//   });//else ends
//     }//authenticate ends
//   });//post ends
// })(req, res, next);

// //GET POST DATA
// const { email, password } = req.body;

// try {
//   //CHECK IF USER EXISTS (EMAIL)
//   const user = await User.findOne({ where: { email } });
//   if (user === null) {
//     res.json({
//       error: true,
//       isAuth: false,
//     });
//   }
//   //COMPARE PASSWORD
//   bcrypt.compare(password, user.password, (err, isMatch) => {
//     if (err) throw err;
//     if (isMatch) {
//       res.json({
//         user,
//         isAuth: isMatch, //true
//       });
//     } else {
//       res.json({
//         error: err,
//         isAuth: isMatch, //false,
//       });
//     }
//   });
// } catch (error) {
//   res.status(501).json({
//     error: error,
//     isAuth: false,
//   });
// }
