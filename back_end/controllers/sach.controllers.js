const { tbSach, sequelize, tbFieuSach, tbFieuSachChiTiet, tbPhat } = require('../models')
const { dayDifference } = require('../util/dayDifference/dayDifference')



const createBook = async (req, res) => {
  const { Ten, MaTacGia, MaTheLoai, MaNXB, MaKeSach, NamXB, Gia, SoLgDauSach, NoiDung } = req.body;
  try {
    const AnhSach=`http://localhost:4500/${req.file.path}`
    const newBook = await tbSach.create({ Ten, MaTacGia, MaTheLoai, MaNXB, AnhSach,MaKeSach, NamXB, Gia, SoLgDauSach, SoLgHienTai:SoLgDauSach, NoiDung });
    res.status(201).send(newBook);
  } catch (error) {
    res.status(500).send(error);
  }

};

const getListBook = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const [results] = await sequelize.query(
        ` select tbsaches.*, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach'  from tbsaches 
          inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
          inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
          inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
          inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id
           where tbsaches.Ten LIKE "%${name}%"`
      )
      res.status(200).send(results);
    } else {
      const [results] = await sequelize.query(
        ` select tbsaches.*, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach'  from tbsaches 
          inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
          inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
          inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
          inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id`
      )
      res.status(200).send(results);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const getBook = async (req, res) => {
  const { id } = req.params;

  try {

    const [results] = await sequelize.query(
      ` select tbsaches.id,tbsaches.NoiDung,tbsaches.Ten, tbtacgia.Ten as 'TacGia',tbtheloais.Ten as 'TheLoai',tbnhaxuatbans.Ten as 'NXB',tbkesaches.Ten as 'KeSach',tbsaches.AnhSach,tbsaches.NamXB,tbsaches.Gia,tbsaches.SoLgDauSach,tbsaches.SoLgHienTai from tbsaches 
          inner join tbtacgia on tbsaches.MaTacGia=tbtacgia.id
          inner join tbtheloais on tbsaches.MaTheLoai=tbtheloais.id
          inner join tbnhaxuatbans on tbsaches.MaNXB=tbnhaxuatbans.id
          inner join tbkesaches on tbsaches.MaKeSach = tbkesaches.id
           where tbsaches.id = ${id}`
    )
    res.status(200).send(results);

  } catch (error) {
    res.status(500).send(error);
  }
}
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { Ten, MaTacGia, MaTheLoai, MaNXB, MaKeSach, NamXB, Gia, SoLgDauSach, SoLgHienTai,NoiDung} = req.body;

  const AnhSach=`http://localhost:4500/${req.file.path}`
  try {
    const book = await tbSach.findOne({
      where: {
        id,
      },
    });

    book.Ten = Ten;
    book.MaTacGia = MaTacGia;
    book.MaTheLoai = MaTheLoai;
    book.MaNXB = MaNXB;
    book.MaKeSach = MaKeSach;
    book.AnhSach = AnhSach;
    book.NamXB = NamXB;
    book.Gia = Gia;
    book.SoLgDauSach = SoLgDauSach;
    book.SoLgHienTai = SoLgHienTai;
    book.NoiDung = NoiDung;
    await book.save();

    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await tbSach.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};




const createBorrowBook = async (req, res) => {
  const { HenTra, SoLgMuonMax, MaSinhVien } = req.body;


  let NgayMuon = new Date();
  try {
    const [results] = await sequelize.query(`select id from tbthethuviens where 
        MaSinhVien = "${MaSinhVien}" `);
    const MaThe = results[0].id

    const newBorrowBook = await tbFieuSach.create({ NgayMuon, MaThe, HenTra, SoLgMuonMax });
    res.status(200).send(newBorrowBook);
  } catch (error) {
    res.status(500).send(error);
  }

};



const createBorrowDetaildBook = async (req, res) => {
  const { MaSach, MaFieuSach } = req.body;
  let MaTinhTrang = 1


  try {
    const book = await tbSach.findOne({
      where: {
        id:MaSach
      },
    });
   const SoLgHienTai=book.SoLgHienTai;
   if(SoLgHienTai==0){
    res.status(201).send('Không còn sách để mượn');
   }else{
    const newBorrowDetaild = await tbFieuSachChiTiet.create({ MaSach, MaTinhTrang, MaFieuSach });
    book.SoLgHienTai=SoLgHienTai-1;
    await book.save();
    res.status(200).send(newBorrowDetaild);
   }
    
  } catch (error) {
    res.status(500).send(error);
  }

};

const viewBookCard = async (req, res) => {
  const { id } = req.params;
 

  try {
    const [results] = await sequelize.query(`select  tbfieusaches.* from tbfieusaches left join tbthethuviens on tbthethuviens.id=tbfieusaches.MaThe 
    inner join tbdocgia on tbdocgia.MaThe=tbthethuviens.id inner join tbfieusachchitiets on tbfieusachchitiets.MaFieuSach=tbfieusaches.id
    where tbdocgia.id= ${id} and tbfieusachchitiets.NgayTra is null  group by tbfieusaches.id`)

    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }

};




const viewDetaildBookCard = async (req, res) => {
  const { id } = req.params;

  try {
    const [results] = await sequelize.query(`select tbfieusachchitiets.*,tbsaches.Ten,tbsaches.AnhSach from tbfieusachchitiets inner join tbsaches on tbsaches.id=tbfieusachchitiets.MaSach where tbfieusachchitiets.MaFieuSach=${id} and tbfieusachchitiets.MaTinhTrang=1`)
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }

};


//trả sách
const giveBookBack = async (req, res) => {
  const { id } = req.params;
  const { MaTinhTrang } = req.body;
  const [results] = await sequelize.query(`select tbsaches.Gia,tbsaches.id ,tbfieusaches.HenTra from tbfieusachchitiets left join
  tbsaches on tbsaches.id=tbfieusachchitiets.MaSach inner join tbfieusaches 
on tbfieusachchitiets.MaFieuSach=tbfieusaches.id where tbfieusachchitiets.id=${id}`)
  const NgayTra = new Date();
  if (MaTinhTrang == 3) {
 
    const TienFat = results[0].Gia;
    const LyDo = 'Mất Sách';
    const phat = await tbPhat.create({ TienFat, LyDo });
    const fieusachchitiet = await tbFieuSachChiTiet.findOne({
      where: {
        id,
      },
    });

    fieusachchitiet.MaPhat = phat.id;
    fieusachchitiet.MaTinhTrang = 3;
    fieusachchitiet.NgayTra = NgayTra;
    await fieusachchitiet.save();
    const notificatication=`Nghiệp vụ đã được thực hiện`

    res.status(200).send(notificatication);
  
    return;
  }

 

  const HenTra = new Date(results[0].HenTra);
  const numberDay = dayDifference( NgayTra,HenTra)
  console.log('numberDay',numberDay);
  if (numberDay >= 0) {

    const fieusachchitiet = await tbFieuSachChiTiet.findOne({
      where: {
        id,
      },
    });


    fieusachchitiet.MaTinhTrang = 2;
    await fieusachchitiet.save();
    const notificatication=`Nghiệp vụ đã được thực hiện`

    res.status(200).send(notificatication);

  }
  else {
    const TienFat = numberDay * (-1) * 5000;

    const LyDo = 'Trả Sách Muộn :' + numberDay * (-1) + ' ngày';
    const phat = await tbPhat.create({ TienFat, LyDo });



    const fieusachchitiet = await tbFieuSachChiTiet.findOne({
      where: {
        id,
      },
    });

    fieusachchitiet.MaPhat = phat.id;
    fieusachchitiet.MaTinhTrang = 2;
    fieusachchitiet.NgayTra = NgayTra;
    await fieusachchitiet.save();
    const notificatication=`Nghiệp vụ đã được thực hiện`

    res.status(200).send(notificatication);



  }
  const book = await tbSach.findOne({
    where: {
      id:results[0].id
    },
  });
 book.SoLgHienTai=book.SoLgHienTai+1;
 await book.save();
};

//xem thong tin truoc khi give book
const previewGiveBook = async (req, res) => {
  const { id } = req.params;
  const { MaTinhTrang } = req.body;
  const [results] = await sequelize.query(`select HenTra from tbfieusaches inner join tbfieusachchitiets 
  on tbfieusachchitiets.MaFieuSach=tbfieusaches.id where tbfieusachchitiets.id=${id}
  `)
  let HenTra = new Date(results[0].HenTra);

  const NgayTra = new Date();
  if (MaTinhTrang == 3) {
    const [results] = await sequelize.query(`select tbsaches.Gia from tbfieusachchitiets left join
             tbsaches on tbsaches.id=tbfieusachchitiets.MaSach where tbfieusachchitiets.id=${id}`)
             const TienFat = results[0].Gia;
             const InforGiveBook = 'Mất Sách,đền giá trị của quyển sách đó ';

         
             res.status(200).send({InforGiveBook,HenTra:HenTra.toLocaleString('en-GB', { timeZone: 'UTC' }).toString().substring(0,10),TienFat});
  
    return;
  }


  let numberDay = dayDifference( NgayTra,HenTra)
  if (numberDay >= 0) {
    const InforGiveBook = `Trả sách sớm hơn dự kiến ${numberDay}`;
    const TienFat = ``;

    res.status(200).send({InforGiveBook,HenTra:HenTra.toLocaleString('en-GB', { timeZone: 'UTC' }).toString().substring(0,10),TienFat});

  }
  else {
    const TienFat = numberDay * (-1) * 5000;

    const InforGiveBook = `Trả Sách Muộn : ${numberDay*-1}  ngày`;
 
    res.status(200).send({InforGiveBook,HenTra:HenTra.toLocaleString('en-GB', { timeZone: 'UTC' }).toString().substring(0,10),TienFat});

  }


};
module.exports = {

  getListBook,
  getBook,
  updateBook,
  deleteBook,
  createBook,
  
  createBorrowBook,
  createBorrowDetaildBook,
  viewBookCard,
  viewDetaildBookCard,
  giveBookBack,
  previewGiveBook


};