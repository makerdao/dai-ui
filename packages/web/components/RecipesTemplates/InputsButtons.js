const title = "Inputs and Buttons";
const description = "Just actionable elements.";
const playroomHash =
  "#?code=N4Igxg9gJgpiBcIA6A7ABBtAeAQhAHmgM74C8wwaAbgIYBOAljSgC7xpIhEsCeANjCIA6OhACuKWFADC9KJzQBfRQD5UmTFgASMGlAYoA5ioCSKAA5iWRNMyhocVlhBREsAeh16Dx9RuwAIgxUDLB0Kh5BIWFq6P5YADI0AEYwfCoAgmgAKjD4LGgZdLoeSanpfhpYufn0uhHuNSx1NLH+2ADijFBt7dhlaSoDfGgAZhB0aGaW1qUpg5Xx01YNyyy97VhraLCjNGJ8LABqNHxiMKScATB7BwUnZzCcqxYri1VRoTDhkcFf4e9NMMVAAxBhpewAdwYLAAFmg+PMRnYdjd9odqKdznNyht4mCIYCNIjypcQABRAC2NAYfE4RMwKBolIunBg1Np9LifVRt0OD3OZN26IKtEeYwmaHZNJGo3BfHkyG5-nceKqwIConMUAgkPQAGU0jAwCwcQtlVVDQITbyRQLWSAdHw+BBngyMFgIOYWAwXConS6PF6fX73dhg76UP6GEHvZG1fEI36cDAYOZYyGo2HPXHkxAvRn4wyPFbjetAR4uqEE1hPjFftFvjXgQBZGAoMQOJwuM0VC3YNsdxwsZxRjyDsTD0fNpGmSDoKcuNDQuFofVHDq9msmeeLrP9j1EKiGMP4Sl8Vxk2Ej8zwdzuSGPoSQgDMQgmhncACYAAx-9xHieSo8hg0JQHCZJfgALFyIFoLCMAMIY16QTBwEgSEMCQngZCcD+aD4dBaDQbBIFys6ZIoC4TzoTy3CiAA1g6YBiHQxSsNIEAunQpF0SwjEwAAtGBEGcF+vF9PREBMYJfAGMaNDmGSogSIqYZSTJckoDAABWEAGMp4iSBJ7RgIiRBEGSoy6HC3xjDZCF0IJMA8DRDIJlU5g0KuUBki2ACMaD+V+RBQYJAAcQX+RFUVoJF-mBeFglQXFgkJalCURWl0XhQAXs8HheXCHmaGADB0GZMBoGAuEgMFChgDwZL1SAaB0GSL4Fe4ZUVQIJUeIBNbuDuLh7jOuIAAqMNSdA8F2I49u4wIVmNe4eGNFbAgA8lYWlVWtS2zit3boLQjDMCwZLiCwe3PAdG39rWfz1u4dZNpts7SAhYAMckBCCFuFZfcav0EA0wM-X9+A1hDoOEMKdywzAvnAPx5yqB4sNQ+NgwAEreBA82jm4h24hW+P6BADQU76NY04TCOHEjKNozAGPuPTeLrWDlQgAANCAtkskQCAANogC2NBMXQ1x8iwIAALoCyJsIi-Aosvr+fMAOwAGzhQrihAA";

const component = `
  <Card>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-eye"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
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
