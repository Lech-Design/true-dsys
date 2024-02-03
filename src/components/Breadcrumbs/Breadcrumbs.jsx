import BreadCrumbItem from "./BreadcrumbItem";

export default function BreadCrumbs(props) {
  let { children } = props;
  return (
    <ul className={props.classes}>
      <BreadCrumbItem classes="mud-breadcrumb-item">Net Zero</BreadCrumbItem>
      <BreadCrumbItem classes="mud-breadcrumb-separator mud-ltr mud-flip-x-rtl">
        /
      </BreadCrumbItem>
      <BreadCrumbItem classes="mud-breadcrumb-item mud-disabled">
        <a href="#"> Summary</a>
      </BreadCrumbItem>
    </ul>
  );
}
