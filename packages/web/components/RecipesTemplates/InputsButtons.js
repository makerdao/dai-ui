const title = "Inputs and Buttons";
const description = "Just actionable elements.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA8BhAhgJygAgLYF5gAmAXwD4AdAO22yQAkY0oBLKgczIEkqAHAVwAuAZ2xoqOAEJDBEKsKQB6RszadqtJABEWANxawMZJTv2HKNOgBk0AIxgAbMgEFsAFRgAPQdmcYmSjb2Thp0Ht6YTMaK4YKRaBaaAOIYBom01naOZEGO2ABmEBjYPAIigVkhlpqlQtG1guk1fELYsPlo-A6CAGpoDvww+BQgWjAdXT59AzAj9S2NoZqmBjBGJnqrRkuZwWQAYiyOOADuLIIAFtgOlWISbeOd3di6-YMVeztIh8c7tDfBYYgACiuDQLAcIz+2CoaFwQxGMDBEKh1Qy7SevTeCJAGMmL2xBSK2CR4IcBSODigqIy2EUTV22S0GAgvCgEBONAAyo4YGBBB9sl8eQ4+T48d1poMgYwHA4IHNoUhWYIWHIyLL5UoVWqqAzNDr1fQWNreKr1UrDXrJDAYLxTea9ZazbqyJIIKyHa6vooRWL0koUmlQtpNuYNmY1gHck4ALIwKj8bDSQSyKiCqqaeOJlNp6LZ-i5i2WJAx7iQGhFmhnS7YLk9JIZgNcCtVhlIFtyGFwnEwACesxA2GELAAXkNgAAWEjYSDyjBA3ipMEYPtzJSdp0lxSbtshssABWXmD7yZkcibIbbVaUe5LZYA8kIHGwYGfUxfFGWr+eaK9UuIghAhAz6vnMN6KHeyxhlGEZbNGlRkCgFx8gA1rYECeDAChfohIbIWhGGeNEBFgOhmEBqR5GeA8EzdFRMBQIQggYIM5BKFRREIXsABKqgQO+aY4d+JZ8awEDRGJaoBlJAkSoIDFMcALFsZJ-EWBxmBQBYIAADQgJcSLYQgADaICxmgqFrGMdGCCAAC6+lnFAlzCKZADMRAAAy6QA7AAbAAHPZJBAA";

const component = `
  <Card m={2}>
    <Heading>Inputs and Buttons</Heading>
    <Divider></Divider>
    <Label>A Text Area</Label>
    <Textarea></Textarea>
    <Grid>
      <Label>Label for Inputs</Label>
      <Input></Input>
      <Input defaultValue="Default Value"></Input>
      <Divider></Divider>
      <Label>Field with label and default value</Label>
      <Field
        label="Email"
        name="email"
        defaultValue="default value for email field"
      />
      <Label>Dropdown Select</Label>
      <Select defaultValue="Hello">
        <option>Hello</option>
        <option>Hi</option>
        <option>Beep</option>
        <option>Boop</option>
      </Select>
    </Grid>
    <Divider></Divider>
    <Label>Menu Button</Label>
    <MenuButton></MenuButton>
    <Label>Icon Button with SVG</Label>
    <IconButton>
      <Icon name="eye" size={4} color="primary"></Icon>
    </IconButton>
    <Label>Primary Button</Label>
    <Button>Button</Button>
    <Label>Outline Button</Label>
    <Button variant="outline">Button</Button>
    <Divider></Divider>
    <Label>Checkboxes</Label>
    <Checkbox></Checkbox>
    <Checkbox defaultChecked={true}></Checkbox>
    <Label>Radio Buttons</Label>
    <Radio></Radio>
    <Radio defaultChecked={true}></Radio>
  </Card>
`;

export default {
  component,
  title,
  description,
  playroomHash,
};
