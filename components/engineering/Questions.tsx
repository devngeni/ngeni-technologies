import { useState } from "react";
import { WhatTitle } from "./Engineering.Styles";
import {
  CardBody,
  CardElement,
  Content,
  Icon,
  Title,
  Wrapper,
  Text,
  Grid,
} from "./Questoin.Styles";
export default function QuestionsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClick4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleClick5 = () => {
    setIsOpen5(!isOpen5);
  };

  const handleClick6 = () => {
    setIsOpen6(!isOpen6);
  };
  return (
    <CardElement>
      <CardElement>
        <WhatTitle>Frequently Asked Questions (FAQ)</WhatTitle>
        <Grid>
          <CardBody isOpen={isOpen}>
            <Wrapper onClick={() => handleClick()}>
              <Title>
                1. What is a Monitor? What are the lists of Basic and Advanced
                monitors?
              </Title>
              <Icon isOpen={isOpen}>+</Icon>
            </Wrapper>
            <Content isOpen={isOpen}>
              <Text onClick={() => handleClick()}>
                Monitor refers to a resource like a server, website, web
                application instance or URL that is monitored for uptime and
                performance. estac supports many types of monitors, each of
                these have various performance metrics. For example,a server
                monitor has metrics like CPU, memory, disk utilization, network
                usage, eventlogs, and process metrics. Likewise a website
                monitor has performance metrics like first byte time, last byte
                time, DNS time, total response time, and uptime status.
              </Text>
            </Content>
          </CardBody>

          <CardBody isOpen={isOpen1}>
            <Wrapper onClick={() => handleClick1()}>
              <Title>
                2. What is a Monitor? What are the lists of Basic and Advanced
                monitors?
              </Title>
              <Icon isOpen={isOpen1}>+</Icon>
            </Wrapper>
            <Content isOpen={isOpen1}>
              <Text onClick={() => handleClick1()}>
                Monitor refers to a resource like a server, website, web
                application instance or URL that is monitored for uptime and
                performance. estac supports many types of monitors, each of
                these have various performance metrics. For example,a server
                monitor has metrics like CPU, memory, disk utilization, network
                usage, eventlogs, and process metrics. Likewise a website
                monitor has performance metrics like first byte time, last byte
                time, DNS time, total response time, and uptime status.
              </Text>
            </Content>
          </CardBody>

          <CardBody isOpen={isOpen2}>
            <Wrapper onClick={() => handleClick2()}>
              <Title>
                3. What is a Monitor? What are the lists of Basic and Advanced
                monitors?
              </Title>
              <Icon isOpen={isOpen2}>+</Icon>
            </Wrapper>
            <Content isOpen={isOpen2}>
              <Text onClick={() => handleClick2()}>
                Monitor refers to a resource like a server, website, web
                application instance or URL that is monitored for uptime and
                performance. estac supports many types of monitors, each of
                these have various performance metrics. For example,a server
                monitor has metrics like CPU, memory, disk utilization, network
                usage, eventlogs, and process metrics. Likewise a website
                monitor has performance metrics like first byte time, last byte
                time, DNS time, total response time, and uptime status.
              </Text>
            </Content>
          </CardBody>

          <CardBody isOpen={isOpen3}>
            <Wrapper onClick={() => handleClick3()}>
              <Title>
                4. What is a Monitor? What are the lists of Basic and Advanced
                monitors?
              </Title>
              <Icon isOpen={isOpen3}>+</Icon>
            </Wrapper>
            <Content isOpen={isOpen3}>
              <Text onClick={() => handleClick3()}>
                Monitor refers to a resource like a server, website, web
                application instance or URL that is monitored for uptime and
                performance. estac supports many types of monitors, each of
                these have various performance metrics. For example,a server
                monitor has metrics like CPU, memory, disk utilization, network
                usage, eventlogs, and process metrics. Likewise a website
                monitor has performance metrics like first byte time, last byte
                time, DNS time, total response time, and uptime status.
              </Text>
            </Content>
          </CardBody>

          <CardBody isOpen={isOpen4}>
            <Wrapper onClick={() => handleClick4()}>
              <Title>
                5. What is a Monitor? What are the lists of Basic and Advanced
                monitors?
              </Title>
              <Icon isOpen={isOpen4}>+</Icon>
            </Wrapper>
            <Content isOpen={isOpen4}>
              <Text onClick={() => handleClick4()}>
                Monitor refers to a resource like a server, website, web
                application instance or URL that is monitored for uptime and
                performance. estac supports many types of monitors, each of
                these have various performance metrics. For example,a server
                monitor has metrics like CPU, memory, disk utilization, network
                usage, eventlogs, and process metrics. Likewise a website
                monitor has performance metrics like first byte time, last byte
                time, DNS time, total response time, and uptime status.
              </Text>
            </Content>
          </CardBody>

          <CardBody isOpen={isOpen5}>
            <Wrapper onClick={() => handleClick5()}>
              <Title>
                6. What is a Monitor? What are the lists of Basic and Advanced
                monitors?
              </Title>
              <Icon isOpen={isOpen5}>+</Icon>
            </Wrapper>
            <Content isOpen={isOpen5}>
              <Text onClick={() => handleClick5()}>
                Monitor refers to a resource like a server, website, web
                application instance or URL that is monitored for uptime and
                performance. estac supports many types of monitors, each of
                these have various performance metrics. For example,a server
                monitor has metrics like CPU, memory, disk utilization, network
                usage, eventlogs, and process metrics. Likewise a website
                monitor has performance metrics like first byte time, last byte
                time, DNS time, total response time, and uptime status.
              </Text>
            </Content>
          </CardBody>

          <CardBody isOpen={isOpen6}>
            <Wrapper onClick={() => handleClick6()}>
              <Title>
                7. What is a Monitor? What are the lists of Basic and Advanced
                monitors?
              </Title>
              <Icon isOpen={isOpen6}>+</Icon>
            </Wrapper>
            <Content isOpen={isOpen6}>
              <Text onClick={() => handleClick6()}>
                Monitor refers to a resource like a server, website, web
                application instance or URL that is monitored for uptime and
                performance. estac supports many types of monitors, each of
                these have various performance metrics. For example,a server
                monitor has metrics like CPU, memory, disk utilization, network
                usage, eventlogs, and process metrics. Likewise a website
                monitor has performance metrics like first byte time, last byte
                time, DNS time, total response time, and uptime status.
              </Text>
            </Content>
          </CardBody>
        </Grid>
      </CardElement>
    </CardElement>
  );
}
