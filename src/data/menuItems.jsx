// src/data/menuItems.jsx

import paneer from "../assets/paneer.jpg";
import chickenBiryani from "../assets/cBriyani.jpg";
import pulao from "../assets/chickenpulao.webp";
import butterNaan from "../assets/butternaan.jpeg";
import mutton from "../assets/mutton.jpeg";
import jeeraRice from "../assets/jeera.jpeg";

import rasmalai from "../assets/rasmalai.jpeg";
import halwa from "../assets/halwa.jpeg";
import custard from "../assets/fruitcustard.jpeg";
import icedTea from "../assets/icedtea.jpeg";
import masalaSoda from "../assets/soda.jpeg";
import strawberryShake from "../assets/milkshake.jpg";

import gobi from "../assets/gobi.jpeg";
import chicken65 from "../assets/c65.jpeg";
import tikka from "../assets/tikka.jpeg";
import springRoll from "../assets/vegroll.jpeg";
import fishFingers from "../assets/fish.jpg";

import dosa from "../assets/dosa.jpeg";
import poori from "../assets/poori.webp";
import vada from "../assets/vada.jpg";
import pongal from "../assets/pongal.jpg";

import sandwich from "../assets/sanwidtch.jpg";
import samosa from "../assets/samosa.jpeg";
import pav from "../assets/pavbhaji.jpg";
import fries from "../assets/french.jpg";

import mojito from "../assets/mojito.jpeg";
import coffee from "../assets/coffee.jpeg";
import coldCoffee from "../assets/coldcoffee.jpeg";

import jamun from "../assets/gulabjamun.webp";
import icecream from "../assets/ice.jpeg";
import brownie from "../assets/brownie.jpg";

const menuItems = [
  { id: 1, name: "Paneer Butter Masala", category: "Main Course", price: 180, isVeg: true, image: paneer },
  { id: 2, name: "Chicken Biryani", category: "Main Course", price: 220, isVeg: false, image: chickenBiryani },
  { id: 3, name: "Veg Pulao", category: "Main Course", price: 150, isVeg: true, image: pulao },
  { id: 4, name: "Butter Naan", category: "Main Course", price: 40, isVeg: true, image: butterNaan },
  { id: 5, name: "Mutton Rogan Josh", category: "Main Course", price: 250, isVeg: false, image: mutton },
  { id: 6, name: "Jeera Rice", category: "Main Course", price: 120, isVeg: true, image: jeeraRice },

  { id: 7, name: "Gobi Manchurian", category: "Starters", price: 100, isVeg: true, image: gobi },
  { id: 8, name: "Chicken 65", category: "Starters", price: 130, isVeg: false, image: chicken65 },
  { id: 9, name: "Paneer Tikka", category: "Starters", price: 140, isVeg: true, image: tikka },
  { id: 10, name: "Spring Roll", category: "Starters", price: 90, isVeg: true, image: springRoll },
  { id: 11, name: "Fish Fingers", category: "Starters", price: 160, isVeg: false, image: fishFingers },

  { id: 12, name: "Masala Dosa", category: "Breakfast", price: 70, isVeg: true, image: dosa },
  { id: 13, name: "Idli Sambar", category: "Breakfast", price: 50, isVeg: true, image: poori },
  { id: 14, name: "Vada", category: "Breakfast", price: 30, isVeg: true, image: vada },
  { id: 15, name: "Pongal", category: "Breakfast", price: 60, isVeg: true, image: pongal },

  { id: 16, name: "Veg Sandwich", category: "Snacks", price: 50, isVeg: true, image: sandwich },
  { id: 17, name: "Samosa", category: "Snacks", price: 20, isVeg: true, image: samosa },
  { id: 18, name: "Pav Bhaji", category: "Snacks", price: 80, isVeg: true, image: pav },
  { id: 19, name: "French Fries", category: "Snacks", price: 60, isVeg: true, image: fries },

  { id: 20, name: "Mango Lassi", category: "Beverages", price: 60, isVeg: true, image: mojito },
  { id: 21, name: "Filter Coffee", category: "Beverages", price: 30, isVeg: true, image: coffee },
  { id: 22, name: "Cold Coffee", category: "Beverages", price: 70, isVeg: true, image: coldCoffee },

  { id: 23, name: "Gulab Jamun", category: "Desserts", price: 40, isVeg: true, image: jamun },
  { id: 24, name: "Vanilla Ice Cream", category: "Desserts", price: 50, isVeg: true, image: icecream },
  { id: 25, name: "Chocolate Brownie", category: "Desserts", price: 90, isVeg: true, image: brownie },
  { id: 26, name: "Rasmalai", category: "Desserts", price: 70, isVeg: true, image: rasmalai },
{ id: 27, name: "Halwa", category: "Desserts", price: 60, isVeg: true, image: halwa },
{ id: 28, name: "Fruit Custard", category: "Desserts", price: 55, isVeg: true, image: custard },
{ id: 29, name: "Lemon Iced Tea", category: "Beverages", price: 50, isVeg: true, image: icedTea },
{ id: 30, name: "Masala Soda", category: "Beverages", price: 40, isVeg: true, image: masalaSoda },
{ id: 31, name: "Strawberry Milkshake", category: "Beverages", price: 65, isVeg: true, image: strawberryShake }

];

export default menuItems;
