export default function useCardOrganization() {
  const imgUrl =
    "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/147484347_3819070534802922_4929298246220081385_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFi4rMh7Yw3qrsCMcaWiRlF6aoBGZo3Aa_pqgEZmjcBr-lDqtVr3_Nw9D1HnHa9jaWxAA8LHpnpABTuXdp3YF-j&_nc_ohc=2xxv2bLVx_0AX_1OVgC&_nc_ht=scontent.fbkk22-6.fna&oh=71b718d7148f60b83f2effa8b469b04a&oe=605694B7";
  const orgShortName = "SGCU";
  const orgShortNameTextSize =
    orgShortName.length > 5 ? "text-2xl" : "text-3xl";
  const orgFullName = "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)";

  return {
    imgUrl,
    orgShortName,
    orgFullName,
    orgShortNameTextSize
  };
}
