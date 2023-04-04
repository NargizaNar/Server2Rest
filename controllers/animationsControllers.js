import { animationsData } from "../model/animationsModel.js";

function getAllAnimationsController(req, res) {
  res.status(200).json({
    greeting: "Hellooo von Server!!!!",
    data: animationsData,
  });
}

function postAnimationsController(req, res) {
  res.status(200).json({
    message: "geposted!",
  });
}

function updateAnimationsController(req, res) {
  res.status(200).json({
    message: "aktualisiert!",
  });
}

function deleteAnimationsController(req, res) {
  res.status(200).json({
    message: "gelöcht!",
  });
}

export {
  getAllAnimationsController,
  postAnimationsController,
  updateAnimationsController,
  deleteAnimationsController,
};
